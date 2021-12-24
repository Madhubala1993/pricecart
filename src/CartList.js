import { UsableList } from "./UsableList";
import { NotUsableList } from "./NotUsableList";

export function CartList({ plan, amount, usable, notUsable }) {
  return (
    <div className="container">
      <p className="plan">{plan}</p>
      <p className="amount">{amount}<span>/month</span></p>
      <hr />
      <div className="container1">
        {usable.map((usable) => <UsableList usableList={usable} />
        )}
      </div>
      <div className="container2">
        {notUsable.map((notusable) => <NotUsableList notUsableList={notusable} />
        )}
      </div>
      <button className="button">Button</button>
    </div>
  );
}
