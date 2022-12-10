import {SplitScreen} from './SplitScreen';
import {LargePersonListItem} from "./people/LargePersonListItem";
import {SmallPersonListItem} from "./people/SmallPersonListItem";
import {RegularList} from "./RegularList";
import {SmallProductListItem} from "./products/SmallProductListItem";
import {NumberedList} from "./NumberedList";
import {LargeProductListItem} from "./products/LargeProductListItem";
import {Modal} from "./Modal";
import {CurrentUserLoader} from "./CurrentUserLoader";
import axios from 'axios';
import {UserInfo} from "./UserInfo";
import {UserLoader} from "./UserLoader";
import {ResourceLoader} from "./ResourceLoader";
import {ProductInfo} from "./ProductInfo";
import {DataSource} from "./DataSource";
import {UncontrolledForm} from "./UncontrolledForm";
import {ControlledForm} from "./ControlledForm";
import {ControlledModal} from "./ControlledModal";
import {useState} from "react";
import {UncontrolledOnboardingFlow} from "./UncontrolledOnboardingFlow";
import {printProps} from "./printProps";
import {withUser} from "./hoc/withUser";
import {UserInfoForm} from "./UserInfoForm";


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

const getServerData = url => async () => {
    const response = await axios.get(url);
    return response.data;
}

const getLocalStorageData = key => () => {
    return localStorage.getItem(key);
}

const Text = ({ message }) => <h1>{message}</h1>;

const StepOne = ({ goToNext }) => (
    <>
        <h1>Step 1</h1>
        <button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
    </>
);
const StepTwo = ({ goToNext }) => (
    <>
        <h1>Step 2</h1>
        <button onClick={() => goToNext({ age: 100 })}>Next</button>
    </>
);
const StepThree = ({ goToNext }) => (
    <>
        <h1>Step 3</h1>
        <button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
    </>
);

const UserInfoWrapped = printProps(UserInfo);

const UserInfoWithLoader = withUser(UserInfo, '234');

function App() {
    const [shouldShowModal, setShouldShowModal] = useState(false);
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
            <ResourceLoader resourceUrl="/users/123" resourceName="user">
                <UserInfo />
            </ResourceLoader>
            <ResourceLoader resourceUrl="/products/1234" resourceName="product">
                <ProductInfo />
            </ResourceLoader>
            <DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
                <UserInfo />
            </DataSource>
            <DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
                <Text />
            </DataSource>

            <UncontrolledForm />
            <ControlledForm />


            <>
                <ControlledModal
                    shouldShow={shouldShowModal}
                    onRequestClose={() => setShouldShowModal(false)}
                >
                    <h1>Hello!</h1>
                </ControlledModal>
                <button onClick={() => setShouldShowModal(!shouldShowModal)}>
                    {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
                </button>
            </>

            <UncontrolledOnboardingFlow onFinish={data => {
                console.log(data);
                alert('Onboarding complete!');
            }}>
                <StepOne />
                <StepTwo />
                <StepThree />
            </UncontrolledOnboardingFlow>

            <UserInfoWrapped a={1} b="Hello" c={{ name: 'Shaun' }} />

            <UserInfoWithLoader />

            <UserInfoForm />
        </>

    );
}

export default App;
