import ReactDOM from "react-dom/client";
import React, { lazy, Suspense } from "react";
import "./remote-mf-decl"

import "./index.css";
// remote component
import Counter from 'remote/Counter';
import Card from 'remote/Card'



const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div className="text-blue-600">Name: host</div>
    <div>Framework: react-19</div>
    <hr>
    </hr>

  <Counter></Counter>
    {/* <PokemonListView list={getList("TEST")}></PokemonListView> 
    <Suspense fallback={<div>Loading Button...</div>}>
        <ButtonWrapper label="Click Me" onClick={() => alert("Button Clicked!")} />
      </Suspense> */}

      <Card title="isi table">
        <p>Ini di pake di host Component Remote</p>
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Column 1</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Column 2</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Column 3</th>
            </tr>
          </thead>
          <tbody>
          <tr>
    <td className="border border-gray-300 px-4 py-2">Row 1 Data 1</td>
    <td className="border border-gray-300 px-4 py-2">Row 1 Data 2</td>
    <td className="border border-gray-300 px-4 py-2">Row 1 Data 3</td>
  </tr>
  <tr className="bg-gray-50">
    <td className="border border-gray-300 px-4 py-2">Row 2 Data 1</td>
    <td className="border border-gray-300 px-4 py-2">Row 2 Data 2</td>
    <td className="border border-gray-300 px-4 py-2">Row 2 Data 3</td>
  </tr>
          </tbody>
        </table>
      </Card>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);