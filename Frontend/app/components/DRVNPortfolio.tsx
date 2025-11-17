/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useAccount, useBalance } from "wagmi";
import { TokenChip, formatAmount } from "@coinbase/onchainkit/token";
import { DRVN_TOKENS } from "../swap/types/swap-types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Car, Vault } from "lucide-react";
// import { formatUnits } from "viem";
// import deployedContracts from "../../contracts/deployedContracts";
// import Image from "next/image";
// import ETHPriceDisplay from "../../service/priceService";

/**
 * User interface representing the structure of user data
 * This matches the MongoDB schema and API responses
 * Note: This interface is duplicated from Settings.tsx - consider moving to a shared types file
 */
interface User {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  xHandle?: string;
  profileImage?: string;
  walletAddress: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Props interface for the DRVNPortfolio component
 * @param currentUser - The currently authenticated user's data
 * @param isAuthenticated - Boolean indicating if user is authenticated
 */
interface DRVNPortfolioProps {
  currentUser: User | null;
  isAuthenticated: boolean;
  onNavigate?: (page: string) => void;
}

/**
 * DRVN Portfolio Component
 *
 * This component displays a user's DRVN ecosystem portfolio including:
 * - BSTR (DRVN ecosystem token) balance - 9 decimals (real-time from blockchain)
 * - Car Collection balance - placeholder for future NFT collection data
 * - Vault Balance - placeholder for future vault/staking data
 *
 * The component features:
 * - Real-time BSTR balance fetching using Wagmi hooks
 * - Placeholder displays for future features (Car Collection, Vault)
 * - Responsive grid layout for different screen sizes
 * - User identification display
 * - Animated visual indicators
 * - Consistent styling with DRVN brand colors
 *
 * Authentication Requirements:
 * - Wallet must be connected
 * - User must be authenticated
 * - Current user data must be available
 */
// ...imports and interfaces remain unchanged

export function DRVNPortfolio({
  currentUser,
  isAuthenticated,
  onNavigate,
}: DRVNPortfolioProps) {
  const { address, isConnected } = useAccount();

  // const usdcConfig = deployedContracts[8453].USDC;
  // const usdcAddress = usdcConfig.address as `0x${string}`;

  const { data: bstrBalance } = useBalance({
    address,
    token: DRVN_TOKENS.BSTR.address as `0x${string}`,
  });

  // const { data: usdcBalanceData } = useReadContract({
  //   address: usdcAddress,
  //   abi: usdcConfig.abi,
  //   functionName: "balanceOf",
  //   args: address ? [address] : undefined,
  //   query: {
  //     refetchInterval: 30000,
  //   },
  // });

  // const { data: ethBalanceData } = useBalance({
  //   address: address,
  //   query: { refetchInterval: 30000 },
  // });

  if (!isConnected || !isAuthenticated || !currentUser) return null;

  // const usdcBalance = usdcBalanceData
  //   ? formatUnits(usdcBalanceData as unknown as bigint, 6)
  //   : "0";
  // const ethBalance = ethBalanceData
  //   ? formatUnits(ethBalanceData.value, 18)
  //   : "0";

  // const ethPrice = 3000;
  // const ethValue = parseFloat(ethBalance) * ethPrice;
  // const usdcValue = parseFloat(usdcBalance);
  // const totalVaultValue = (ethValue + usdcValue).toFixed(2);

  // Corrected formatBalance function
  const formatBalance = (
    balance: { formatted: string } | null | undefined,
    decimals: number
  ) => {
    if (!balance?.formatted) return "0.00";

    const maxDecimals = decimals === 9 ? 4 : Math.min(decimals, 4);

    return formatAmount(balance.formatted, {
      minimumFractionDigits: Math.min(maxDecimals, 2),
      maximumFractionDigits: maxDecimals,
    });
  };

  return (
    <Card className="bg-none backdrop-blur-sm border-none">
      {/* CardHeader, CardContent, and other JSX remain unchanged */}
      <CardHeader className="pb-4">
        <CardTitle className="text-white font-mono text-lg flex items-center gap-2 uppercase">
          <div className="w-2 h-2 bg-[#00daa2] rounded-full animate-pulse"></div>
          Portfolio
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 cursor-pointer hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-200"
            onClick={() => onNavigate?.("buster-club")}
          >
            <div className="flex items-center justify-between mb-2">
              <TokenChip token={DRVN_TOKENS.BSTR} />
              <span className="text-gray-400 text-xs font-sans">Balance</span>
            </div>
            <div className="text-2xl font-bold text-white font-mono">
              {formatBalance(bstrBalance, DRVN_TOKENS.BSTR.decimals)}
            </div>
          </div>

          {/* Car Collection Card and Vault Card remain unchanged */}
        </div>
      </CardContent>
    </Card>
  );
}
