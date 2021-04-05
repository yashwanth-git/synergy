import React, { useState, useEffect } from "react";
//SubForms
import LineItemDetails from "./LineItemDetails";
import LineItemCharges from "./LineItemCharges";
import LineItemConfirm from "./LineItemConfirm";
import LineItemPayment from "./LineItemPayment";
import LineItemSuccess from "./LineItemSuccess";
const LineItemForm = () => {
  const [itemFields, setItemFields] = useState({
    step: 1,
    itemName: "",
    description: "",
    weight: 0,
    count: 0,
    loadingCharge: 0,
    transportCharge: 0,
    tax: 0,
    totalAmount: 0,
    orderStatus: "",
    paymentMode: "",
    paymentRef: "",
    note: "",
  });

  const nextStepHandler = () => {
    const { step } = itemFields;
    setItemFields({ ...itemFields, step: step + 1 });
  };
  const prevStepHandler = () => {
    const { step } = itemFields;
    setItemFields({ ...itemFields, step: step - 1 });
  };
  const handleChange = (input) => (e) => {
    setItemFields({ ...itemFields, [input]: e.target.value });
  };

  const {
    step,
    itemName,
    description,
    weight,
    count,
    loadingCharge,
    transportCharge,
    tax,
    totalAmount,
  } = itemFields;
  useEffect(() => {
    const loadingCharge = count * weight * 2.75;
    const transportCharge = count * weight * 5;
    const tax = count * weight * 3.25;
    const totalAmount = loadingCharge + transportCharge + tax;
    setItemFields({
      ...itemFields,
      loadingCharge,
      transportCharge,
      tax,
      totalAmount,
    });
  }, [count]);
  const values = {
    itemName,
    description,
    weight,
    count,
    loadingCharge,
    transportCharge,
    tax,
    totalAmount,
  };
  switch (step) {
    case 1:
      return (
        <LineItemDetails
          nextStepHandler={nextStepHandler}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <LineItemCharges
          nextStepHandler={nextStepHandler}
          itemFields={itemFields}
          setItemFields={setItemFields}
          prevStepHandler={prevStepHandler}
          values={values}
        />
      );
    case 3:
      return (
        <LineItemConfirm
          values={values}
          prevStepHandler={prevStepHandler}
          nextStepHandler={nextStepHandler}
        />
      );
    case 4:
      return (
        <LineItemPayment
          values={values}
          prevStepHandler={prevStepHandler}
          nextStepHandler={nextStepHandler}
        />
      );
    case 5:
      return <LineItemSuccess />;
  }
};

export default LineItemForm;
