import React from "react";
import { observer } from "mobx-react-lite";

export class FooModel {

    static readonly render: React.FC = () => {
        return <div>Hello!</div>;
    }

}

export const Foo1 = observer(FooModel.render);
Foo1.displayName = "Foo";