import { NavLink } from "react-router-dom";
import { getActiveClass } from "./App";
import { getInvoices } from "./data";

export default function Invoices() {
    let invoices = getInvoices();
    return (
      <div className="Invoice" style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          {invoices.map(invoice => (
            <NavLink
              className={getActiveClass}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
        </nav>
      </div>
    );
  }