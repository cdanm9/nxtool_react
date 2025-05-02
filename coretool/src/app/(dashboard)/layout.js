import React from 'react';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import CustomToolHeaderButton from 'components/header/CustomToolHeaderButton'

export default function Layout(props) {
  return (
    <DashboardLayout slots={{
      toolbarActions: CustomToolHeaderButton
    }} >
      <PageContainer>{props.children}</PageContainer>
    </DashboardLayout>
  );
}
