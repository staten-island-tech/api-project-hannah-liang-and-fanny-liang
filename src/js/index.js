import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "YOURKEYHERE";



const query = async function () {
    try {
        const response = await fetch(''
    );
    const data = await response.json();
    data.results.forEach((books) => {
        DOMSelectors.grid.insertAdjacentHTML(
            "beforeend", 
            );
    });
} catch (error) {
    alert("Hey something went wrong");
}
};
query();