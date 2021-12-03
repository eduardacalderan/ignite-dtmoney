import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-12-03 11:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Gastos mensais",
          amount: 800,
          createdAt: new Date("2021-12-01 09:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api"; // todas as chamadas api tem /api

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    }); //quando houver uma requisição do tipo get para a rota transactions eu vou retornar algo

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
