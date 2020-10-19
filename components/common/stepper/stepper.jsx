import React, { useEffect,Suspense } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PersonIcon from "@material-ui/icons/Person";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import { useRouter } from "next/router";
import classes from "./stepper.module.css";
import { useMediaQuery } from "@material-ui/core";

function ColorlibStepIcon(props) {
  const { active, completed } = props;

  const icons = {
    1: <ConfirmationNumberIcon fontSize="small" />,
    2: <PersonIcon fontSize="small" />,
    3: <CreditCardIcon fontSize="small" />,
    4: <CheckCircleIcon fontSize="small" />,
  };
  return (
    <div
      className={clsx(classes.rootStepIcon, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

function getSteps() {
  return ["Resumes", "Datos", "Pago", "Confirmation"];
}

const Steppercomponent = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const router = useRouter();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  useEffect(() => {
    if (router.pathname === '/crearcuenta') {
     setActiveStep(1);
    } else if (router.pathname === "/confirmacion") {
      setActiveStep(3)
    }
  }, [activeStep]);

  return (
    <div className={classes.root}>
      <Stepper style={{display:'flex', justifyContent:'center'}} connector={false} activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel  StepIconComponent={ColorlibStepIcon}>
              {isMobile ? (
                index === activeStep ? (
                  <div>{label}</div>
                ) : null
              ) : (
                <div>{label}</div>
              )}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    
    </div>
  );
};
export {Steppercomponent};
