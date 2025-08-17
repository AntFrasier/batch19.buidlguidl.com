"use client";

import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export function BatchInfo() {
  const { address } = useAccount();
  const isMember = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [address],
  });
  const isCheckedIn = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [address],
  });

  return (
    <>
      {isMember.data && <div>Batch Member</div>}
      {isCheckedIn.data && <div>Checked In</div>}
    </>
  );
}
