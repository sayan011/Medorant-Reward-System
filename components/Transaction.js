import React from "react";
import { useMoralis } from "react-moralis";
import { useWeb3Transfer } from "react-moralis";
import Moralis from "moralis";

const Transaction = () => {
  const { user } = useMoralis();

  const { fetch, error, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.Token(40, 18),
    receiver: user.attributes.ethAddress,
    type: "erc20",
    contractAddress: "0xa240974f973bf9e3640fad9bf69d1ee4c1817c22",
  });
  return (
    <div>
      <div>
        <button onClick={() => fetch()} disabled={isFetching}>
          Transfer
        </button>
      </div>
    </div>
  );
};

export default Transaction;
