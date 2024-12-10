import { useEffect } from 'react';

import { ArrowBack } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import GradientOutlinedButton from '@/components/GradientOutlinedButton';

import TOOL_OUTPUTS from './outputs';
import styles from './styles';

import ToolForm from './views/ToolForm';

import ROUTES from '@/libs/constants/routes';

import theme from '@/libs/theme/theme';
import { actions as ToolActions } from '@/tools/data';

const { resetCommunicator } = ToolActions;

const ToolPage = (props) => {
  const { toolDoc } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const { response, formOpen } = useSelector((state) => state.tools);

  const { id } = toolDoc;

  useEffect(() => {
    return () => {
      dispatch(resetCommunicator());
    };
  }, []);

  const handleRoute = () => router.push(ROUTES.HOME);

  const renderBackButton = () => {
    return (
      <Grid {...styles.backButtonGridProps}>
        <GradientOutlinedButton
          bgcolor="#24272F"
          icon={<ArrowBack />}
          textColor="#AC92FF"
          iconPlacement="left"
          onHoverTextColor={theme.palette.Background.white2}
          clickHandler={handleRoute}
          text="Back"
          {...styles.outlinedButtonProps}
        />
      </Grid>
    );
  };

  const ToolOutputComponent = TOOL_OUTPUTS[id];

  return (
    <Grid {...styles.mainGridProps}>
      {renderBackButton()}
      <ToolForm toolDoc={toolDoc} formOpen={formOpen} response={response} />
      {!formOpen && response && <ToolOutputComponent />}
    </Grid>
  );
};
export default ToolPage;
