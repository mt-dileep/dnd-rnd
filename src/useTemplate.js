import { useState } from "react";

export default function useTemplate() {
  const [template, setTemplate] = useState({});
  return { template, setTemplate };
}
