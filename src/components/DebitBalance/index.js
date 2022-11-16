import React from "react";
import { DebitBalanceBox } from "./DebitBalance.style";
import { Box } from "../../styles/Box.style";

const DebitBalance = () => {
  return (
    <DebitBalanceBox>
      <div>Debit Balance</div>
      <Box align="center" gap="0.5rem" className="balance-container">
        <svg
          width="20"
          height="20"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.9569 12.88C27.4185 6.05231 21.9477 0.58154 15.12 0.0430779C14.7538 0.0215394 14.3662 0 14 0C6.26769 0 0 6.26769 0 14C0 21.7323 6.26769 28 14 28C21.7323 28 28 21.7323 28 14C28 13.6338 27.9785 13.2462 27.9569 12.88ZM16.1 16.1L14 22.6513L11.9 16.1L5.34872 14L11.9 11.9L14 5.34872L16.1 11.9L22.6513 14L16.1 16.1Z"
            fill="white"
          />
        </svg>
        <h1>2500</h1>
      </Box>
    </DebitBalanceBox>
  );
};

export default DebitBalance;
