import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

import { Tiptap } from "./components";

import {
  BASIC_CONTENT,
  MARKDOWN_SHORTCUTS_CONTENT,
  POPOVER_EDITOR_CONTENT,
  SUGGESTIONS_EDITOR_CONTENT,
  SYNTAX_HIGHLGHTING_CONTENT,
  LONG_DOCUMENT_PERFORMANCE_CONTENT,
  READ_ONLY_MODE_CONTENT,
  READ_ONLY_MODE_V2_CONTENT,
} from "./data";

const App = () => {
  return (
    <BrowserRouter>
      <div id="Wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <Tiptap
                content={BASIC_CONTENT}
                withToolbar={true}
                withTaskListExtension={true}
                withLinkExtension={true}
                withEmojisReplacer={true}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
