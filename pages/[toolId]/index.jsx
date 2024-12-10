import { useRouter } from 'next/router';

import MainAppLayout from '@/layouts/MainAppLayout';

import ROUTES from '@/libs/constants/routes';
import useToolProps from '@/libs/hooks/useToolProps';
import ToolPage, { ToolPageSkeleton } from '@/tools';

/**
 * This component renders the ToolPage component.
 *
 * @return {JSX.Element} Returns the ToolPage component.
 */
const IndividualToolPage = () => {
  const router = useRouter();

  const { toolDoc, loading, ...toolProps } = useToolProps();

  if (loading || !toolDoc) {
    if (!toolDoc && !loading) router.push(ROUTES.HOME);
    return <ToolPageSkeleton />;
  }

  return <ToolPage toolDoc={toolDoc} {...toolProps} />;
};

IndividualToolPage.getLayout = function getLayout(page) {
  return <MainAppLayout isToolPage>{page}</MainAppLayout>;
};

export default IndividualToolPage;
