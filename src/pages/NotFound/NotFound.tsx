import React from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        Go Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
