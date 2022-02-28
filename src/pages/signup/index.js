import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { loadStripe } from "@stripe/stripe-js";
import stripeService from "../../services/stripe.service";
import authService from "../../services/auth.service";
import Step from "./Step";
import StepContext from "./StepContext";
import stepsData from "../../data/signup.data";
import StepTable from "./StepTable";
import Input from "../../components/UI/Input/Input";
import NextButton from "../../components/UI/NextButton";
import styles from "./index.module.sass";

const stripePromise = loadStripe(
  "pk_test_51IYAy4EMn5LU6PTL0lp2KxEvyqlaMoQ5ASLz8NrN7DZBRF3Foo4q86s2tIN1OXXT08rtL3hIZx1UPqZhYZKqpQ1400scdPmFdA"
);

const Index = () => {
  const [account, setAccount] = useState({});
  const [plan, setPlan] = useState({ label: "standard", price: 30 });
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log(
      `[state] Plan :\nLabel=${plan.label || "none"}\nPrice=${plan.price || 0}`
    );
  }, [plan]);

  useEffect(() => {
    console.log(
      `[state] Account :\nEmail=${account.email || "none"}\nPassword=${
        account.password || "none"
      }`
    );
  }, [account]);

  const handleConfirmation = async () => {
    const payload = {
      //plan: plan.label,
      total: plan.price,
    };

    try {
      setStep(step + 1);
      const stripe = await stripePromise;
      const response = await stripeService.createSession(payload, plan);
      
      await authService.signup(account).then((data) => {
        localStorage.setItem("token", JSON.stringify(data.token));
        console.log(data);
      })

      await stripe.redirectToCheckout({
        sessionId: response.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.signup}>
      {step === 1 ? (
        <Step
          image={stepsData.one.image}
          indicator={stepsData.one.indicator}
          title={stepsData.one.title}
        >
          <StepContext context={stepsData.one.context} />
          <NextButton onClick={() => setStep(step + 1)} />
        </Step>
      ) : (
        <></>
      )}

      {step === 2 ? (
        <Step indicator={stepsData.two.indicator} title={stepsData.two.title}>
          <StepContext context={stepsData.two.context} />
          <form className={styles.signup_form}>
            <Input
              type="email"
              label="email"
              id="email"
              name="email"
              placeholder="Email address"
              onChange={(e) =>
                setAccount({ ...account, email: e.target.value })
              }
            />
            <Input
              type="password"
              label="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
            />
            <NextButton onClick={() => setStep(step + 1)} />
          </form>
        </Step>
      ) : (
        <></>
      )}

      {step === 3 ? (
        <Step
          image={stepsData.three.image}
          indicator={stepsData.three.indicator}
          title={stepsData.three.title}
          className={styles.signup_list_icon}
        >
          <ul className={styles.signup_list}>
            {stepsData.three.list.map((element, index) => {
              return (
                <li key={`list-key-${index}`}>
                  <Icon
                    icon={stepsData.three.icon}
                    className={styles.check_icon}
                  />
                  {element}
                </li>
              );
            })}
          </ul>
          <NextButton onClick={() => setStep(step + 1)} />
        </Step>
      ) : (
        <></>
      )}

      {step === 4 ? (
        <Step
          image={stepsData.four.image}
          indicator={stepsData.four.indicator}
          title={stepsData.four.title}
          className={styles.signup_list_icon}
        >
          <ul className={styles.signup_list}>
            {stepsData.four.list.map((element, index) => {
              return (
                <li key={`list-key-${index}`}>
                  <Icon
                    icon={stepsData.four.icon}
                    className={styles.check_icon}
                  />
                  {element}
                </li>
              );
            })}
          </ul>
          <StepTable plan={plan} setPlan={setPlan} />
          <NextButton onClick={handleConfirmation} />
        </Step>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Index;
