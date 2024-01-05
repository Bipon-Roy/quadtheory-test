import { useContext } from "react";
import { DataContext } from "../Provider/DataProvider";

const useData = () => {
    const auth = useContext(DataContext);
    return auth;
};

export default useData;
