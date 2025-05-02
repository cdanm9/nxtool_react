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

export const dummyJSONData = async () => {
  const data={
    "name":"Log Out",
    "code":"LO",
    "description":"Log Out Page"
  }
  return data;
};

export const vendorJSONData = async () => {
  const dashboardData=require('data/vendorDashboard.json')
  return dashboardData;
};

// const OWNER = 'cdanm9'; // example: 'octocat'
// const REPO = 'nxtool_react';         // example: 'Hello-World'
// const FILE_PATH = '/coretool/src/docgit/masterEntity.json'; // example: 'data/config.json'
// const BRANCH = 'main';                 // or 'master' or any other branch
// const GITHUB_TOKEN = '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'; // create a personal access token

// /cdanm9/nxtool_react/blob/main/coretool/src/docgit/masterEntity.json   

// === NEW JSON CONTENT ===
// const newContent = {
//   "name":"Log Out",
//   "code":"LO",
//   "description":"Log Out Page"
// }

// export const getGitHubData = async () =>  {
//   try {
//     // Step 1: Get the current SHA
//     const getUrl = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}?ref=${BRANCH}`;
//     const getResponse = await axios.get(getUrl, {
//       headers: {
//         Authorization: `token ${GITHUB_TOKEN}`,
//         Accept: 'application/vnd.github.v3+json',
//       }
//     });

//     const currentSha = getResponse.data.sha;
//     console.log('Current SHA:', currentSha);

//   } catch (error) {
//     console.error('❌ Error:', error.response ? error.response.data : error.message);
//   }
// }
