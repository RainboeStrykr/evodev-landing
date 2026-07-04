import { useEffect, useState } from "react";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

const loadingStates = [
  { text: "Designing your experience" },
  { text: "Crafting the pixels" },
  { text: "Igniting your brand" },
];

const TOTAL_MS = 3100;
const STEP_MS = Math.round(TOTAL_MS / loadingStates.length);

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 400);
    }, TOTAL_MS);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <MultiStepLoader
      loadingStates={loadingStates}
      loading={loading}
      duration={STEP_MS}
      loop={false}
    />
  );
}
