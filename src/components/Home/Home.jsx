import AboutSection from "./AboutSection";
import Banner from "./Banner";
import Categories from "./Categories";
import JobCards from "./JobCards";


const Home = () => {
    return (
        <div>
            <br /><br />

            <Banner></Banner>

            <br /><br />

            <JobCards></JobCards>

            <br /><br />

            <Categories></Categories>

            <br /><br />

            <AboutSection></AboutSection>
        </div>
    );
};

export default Home;