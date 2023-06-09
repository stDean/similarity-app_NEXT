"use client";

import { FC, useState } from "react";
import { signOut } from "next-auth/react";

import { Button } from "./Button";
import { toast } from "./Toast";

interface SignOutButtonProps { }

const SignOutButton: FC<SignOutButtonProps> = ({ }) => {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signUserOut = async () => {
    try {
      setIsLoading(true)
      await signOut()
    } catch (e) {
      toast({
        title: 'Error signing out',
        message: 'Please try again later.',
        type: 'error',
      })
    }
  }

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign Out
    </Button>
  );
}

export default SignOutButton;