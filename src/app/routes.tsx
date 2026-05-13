import { createBrowserRouter } from "react-router";
import { Root } from "./layout/Root";
import { Home } from "./pages/Home";
import { EcoTrack } from "./pages/projects/EcoTrack";
import { StudySync } from "./pages/projects/StudySync";
import { BillTracker } from "./pages/projects/BillTracker";
import { MediaAnalyzer } from "./pages/projects/MediaAnalyzer";
import { MindfulU } from "./pages/projects/MindfulU";
import { ResumeAnalyzer } from "./pages/projects/ResumeAnalyzer";
import { PresidentialSuite } from "./pages/projects/PresidentialSuite";
import { PDFAccessibility } from "./pages/projects/PDFAccessibility";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projects/bill-tracker", Component: BillTracker },
      { path: "projects/presidential-suite", Component: PresidentialSuite },
      { path: "projects/pdf-accessibility", Component: PDFAccessibility },
      { path: "projects/campus-quest", Component: StudySync },
      { path: "projects/sustainability-dashboard", Component: EcoTrack },
      { path: "projects/it-chatbot", Component: MindfulU },
    ],
  },
]);