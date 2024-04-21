import { BG_LOGO } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => <div>
    <GptSearchBar />
    <GptMovieSuggestions/>
</div>
export default GptSearch;