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
        {/*  <nav>
          <ul>
            <li>
              <NavLink to="/basic" className="selected">
                Basic
              </NavLink>
            </li>
            <li>
              <NavLink to="/popover-editor" className="selected">
                Popover Editor
              </NavLink>
            </li>
            <li>
              <NavLink to="/suggestions" className="selected">
                Suggestions
              </NavLink>
            </li>
            <li>
              <NavLink to="/markdown-shortcuts" className="selected">
                Markdown Shortcuts
              </NavLink>
            </li>
            <li>
              <NavLink to="/syntax-highlighting" className="selected">
                Syntax Highlighting
              </NavLink>
            </li>
            <li>
              <NavLink to="/placeholder-text" className="selected">
                Placeholder Text
              </NavLink>
            </li>
            <li>
              <NavLink to="/long-document-performance" className="selected">
                Long Document Performance
              </NavLink>
            </li>
            <li>
              <NavLink to="/read-only-mode" className="selected">
                Read-only Mode
              </NavLink>
            </li>
            <li>
              <NavLink to="/read-only-mode-v2" className="selected">
                Read-only Mode v2
              </NavLink>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route
            path="/basic"
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
