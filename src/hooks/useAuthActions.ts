import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  type AuthError,
} from "firebase/auth";
import { useState } from "react";
import { useAuth } from "reactfire";

interface AuthActionResponse {
  success: boolean;
  error: AuthError | null;
}

export const useAuthActions = () => {
  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  const login = async (data: {
    email: string;
    password: string;
  }): Promise<AuthActionResponse> => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);
      return {
        success: true,
        error: null,
      };
    } catch (error) {
      const authError = error as AuthError;
      return {
        success: false,
        error: authError,
      };
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: {
    email: string;
    password: string;
    displayname: string;
  }): Promise<AuthActionResponse> => {
    try {
      setLoading(true);
      const currentUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      return {
        success: true,
        error: null,
      };
    } catch (error) {
      const authError = error as AuthError;
      return {
        success: false,
        error: authError,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    register,
    loading,
  };
};
