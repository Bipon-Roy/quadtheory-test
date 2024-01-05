import { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
            .then((res) => {
                setData(res.data.Items);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
                setLoading(false);
            });
    }, []);

    const result = { data, loading };
    return <DataContext.Provider value={result}>{children}</DataContext.Provider>;
};
DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DataProvider;
