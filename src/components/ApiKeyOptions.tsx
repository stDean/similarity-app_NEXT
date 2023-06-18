"use client";

import { FC, useState } from "react";
import { useRouter } from "next/router";

import { toast } from "./ui/Toast";
import { createApiKey } from "@/helpers/createApiKey";

interface ApiKeyOptionsProps {
  // passing of entire object not allowed due to date property not being serializable
  apiKeyKey: string
}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({ apiKeyKey }) => {

  // const router = useRouter();
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
  const [isRevoking, setIsRevoking] = useState<boolean>(false);

  const createNewApiKey = async () => {
    setIsCreatingNew(true);
    try {
      // await revokeApiKey();
      await createApiKey();
      // router.reload();
    } catch (error) {
      toast({
        title: 'Error creating new API key',
        message: 'Please try again later.',
        type: 'error',
      });
    } finally {
      setIsCreatingNew(false);
    }
  }

  return (
    <div>Hello</div>
  );
}

export default ApiKeyOptions;