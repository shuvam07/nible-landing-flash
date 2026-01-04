import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

// Redirect /api/newsletter/unsubscribe to /unsubscribe
const ApiUnsubscribe = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  useEffect(() => {
    // Redirect to the frontend unsubscribe page with the token
    if (token) {
      navigate(`/unsubscribe?token=${token}`, { replace: true });
    } else {
      navigate("/unsubscribe", { replace: true });
    }
  }, [token, navigate]);

  return null;
};

export default ApiUnsubscribe;

