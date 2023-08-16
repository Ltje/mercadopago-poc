import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";
import {
  ICardPaymentBrickPayer,
  ICardPaymentFormData,
} from "@mercadopago/sdk-react/bricks/cardPayment/type";
import { IBrickError } from "@mercadopago/sdk-react/bricks/util/types/common";
// import mockPayload from "./mockPayload";
export type TCardPaymentBrickPaymentType = "credit_card" | "debit_card";

const publicKey = "";
const locale = "es-CO";
const PaymentInitialization = () => {
  initMercadoPago(publicKey, {});
  const initialization = {
    amount: 10000,
    // preferenceId: '1355382796-696a1972-adc9-45fe-aab9-bde2c2ba699d',
  };
  const customization = {
    paymentMethods: {
      types: {
        included: ["credit_card"] as TCardPaymentBrickPaymentType[],
      },
    },
  };

  const onSubmit = async (
    formData: ICardPaymentFormData<ICardPaymentBrickPayer>
  ) => {
    console.log(formData)
    fetch("http://localhost:4200/paymentpage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      
    })
    .then((response) => response.json())
    .then((response) => {
      // recibir el resultado del pago
      console.log(response);
    })
    .catch((error) => {
        // manejar la respuesta de error al intentar crear el pago
        console.log(error);
      });
  };
  const onError = async (error: IBrickError) => {
    // callback called for all Brick error cases
    console.log("error msg:", error);
  };
  const onReady = async () => {
  //this is use when the cardpayment brick is loaded
  };



  return (
    <CardPayment
      locale={locale}
      initialization={initialization}
      customization={customization}
      onSubmit={onSubmit}
      onReady={onReady}
      onError={onError}
    />
  );
};

export default PaymentInitialization;
