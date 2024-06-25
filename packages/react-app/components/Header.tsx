import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

export default function Header() {
    const [hideConnectBtn, setHideConnectBtn] = useState(false);
    const { connect } = useConnect();

    import { useEffect, useState } from "react";
    import { useAccount } from "wagmi";
    
    export default function Home() {
        const [userAddress, setUserAddress] = useState("");
        const [isMounted, setIsMounted] = useState(false);
        const { address, isConnected } = useAccount();
    
        // The code must run in a browser environment and not in node environment
    if (window && window.ethereum) {
        // User has a injected wallet
      
        if (window.ethereum.isMinipay) {
          // User is using Minipay
      
          // Requesting account addresses
          let accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
            params: [],
          });
      
          // Injected wallets inject all available addresses,
          // to comply with API Minipay injects one address but in the form of array
          console.log(accounts[0]);
        }
      
        // User is not using MiniPay
      }
      
      // User does not have a injected wallet
        useEffect(() => {
            setIsMounted(true);
        }, []);
    
        useEffect(() => {
            if (isConnected && address) {
                setUserAddress(address);
            }
        }, [address, isConnected]);
    
        if (!isMounted) {
            return null;
        }
    
        return (
            <div className="flex flex-col justify-center items-center">
                <div className="h1">
                    There you go... a canvas for your next Celo project!
                </div>
                {isConnected ? (
                    <div className="h2 text-center">
                        Your address: {userAddress}
                    </div>
                ) : (
                    <div>No Wallet Connected</div>
                )}
            </div>
        );
    }
    

    return (
        <Disclosure as="nav" className="bg-prosperity border-b border-black">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Image
                                        className="block h-8 w-auto sm:block lg:block"
                                        src="/logo.svg"
                                        width="24"
                                        height="24"
                                        alt="Celo Logo"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    <a
                                        href="#"
                                        className="inline-flex items-center border-b-2 border-black px-1 pt-1 text-sm font-medium text-gray-900"
                                    >
                                        Home
                                    </a>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {!hideConnectBtn && (
                                    <ConnectButton
                                        showBalance={{
                                            smallScreen: true,
                                            largeScreen: false,
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 pt-2 pb-4">
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-black py-2 pl-3 pr-4 text-base font-medium text-black"
                            >
                                Home
                            </Disclosure.Button>
                            {/* Add here your custom menu elements */}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
