import axios from "axios";

const baseURL = "POAdvanced/odata/v4/pocreation";

const instance = axios.create({
  baseURL
});

export const getTableData = async (params = { $top: 100, $skip: 0 }) => {
  const { data } = await instance.get("/Plants", {
    params
  });

  return data.d?.results || data.d || data.value;
};

export const getTableCount = async () => {
  const { data } = await instance.get("/Plants/$count");
  return data;
};

const OWNER = 'cdanm9'; // example: 'octocat'
const REPO = '';         // example: 'Hello-World'
const FILE_PATH = 'path/to/your.json'; // example: 'data/config.json'
const BRANCH = 'main';                 // or 'master' or any other branch
const GITHUB_TOKEN = 'your_github_token_here'; // create a personal access token

// === NEW JSON CONTENT ===
const newContent = {
  key: "newValue",
  anotherKey: "anotherValue"
};

async function updateJsonFile() {
  try {
    // Step 1: Get the current SHA
    const getUrl = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}?ref=${BRANCH}`;
    const getResponse = await axios.get(getUrl, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      }
    });

    const currentSha = getResponse.data.sha;
    console.log('Current SHA:', currentSha);

    // Step 2: Prepare the updated content (base64-encoded)
    const updatedContent = Buffer.from(JSON.stringify(newContent, null, 2)).toString('base64');

    // Step 3: Update the file
    const putUrl = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`;
    const putResponse = await axios.put(putUrl, {
      message: 'Updating JSON file via API',
      content: updatedContent,
      sha: currentSha,
      branch: BRANCH
    }, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      }
    });

    console.log('✅ File updated successfully!');
    console.log('Commit URL:', putResponse.data.commit.html_url);

  } catch (error) {
    console.error('❌ Error:', error.response ? error.response.data : error.message);
  }
}

updateJsonFile();
