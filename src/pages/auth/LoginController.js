import { useLoginMutation } from "../../queries/useLoginQuery";
import { useAuthStore } from "../../store/authStore";


export function useLoginController() {
  const { user, logout } = useAuthStore();
  const loginMutation = useLoginMutation();

  const onFinish = (values) => {
    loginMutation.mutate(values);
  };

  return {
    user,
    isLoading: loginMutation.isLoading,
    onFinish,
    logout,
  };
}
