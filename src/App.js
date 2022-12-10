import {SplitScreen} from './SplitScreen';
import {LargePersonListItem} from "./people/LargePersonListItem";
import {SmallPersonListItem} from "./people/SmallPersonListItem";
import {RegularList} from "./RegularList";
import {SmallProductListItem} from "./products/SmallProductListItem";
import {NumberedList} from "./NumberedList";
import {LargeProductListItem} from "./products/LargeProductListItem";
import {Modal} from "./Modal";
import {CurrentUserLoader} from "./CurrentUserLoader";
import {UserInfo} from "./UserInfo";
import {UserLoader} from "./UserLoader";


const LeftHandComponent = () => {
    return <h1 style={{backgroundColor: 'green'}}>Left!</h1>;
}

const RightHandComponent = () => {
    return <p style={{backgroundColor: 'red'}}>Right!</p>;
}

const people = [{
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
}, {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
}, {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.5,
}, {
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8,
}, {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2,
}];

function App() {
    return (
        // <>
        //     <SplitScreen
        //         left={LeftHandComponent}
        //         right={RightHandComponent}/>
        //
        //     <>
        //         <RegularList
        //             items={people}
        //             resourceName="person"
        //             itemComponent={SmallPersonListItem}/>
        //         <RegularList
        //             items={people}
        //             resourceName="person"
        //             itemComponent={LargePersonListItem}/>
        //         <RegularList
        //             items={products}
        //             resourceName="product"
        //             itemComponent={SmallProductListItem} />
        //         <NumberedList
        //             items={products}
        //             resourceName="product"
        //             itemComponent={LargeProductListItem} />
        //     </>
        //
        //     <>
        //         <Modal>
        //             <LargeProductListItem product={products[0]} />
        //         </Modal>
        //     </>
        // </>
        <>
            <UserLoader userId="123">
                <UserInfo />
            </UserLoader>
            <UserLoader userId="234">
                <UserInfo />
            </UserLoader>
            <UserLoader userId="345">
                <UserInfo />
            </UserLoader>
        </>

    );
}

export default App;
