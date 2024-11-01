import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../utility/AddStore';
import Book from '../../book/Book';

const ListedBooks = () => {

    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData();

    useEffect(() => {
        const storeReadList = getStoreReadList();
        const storeReadListInt = storeReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storeReadListInt.includes(book.bookId))
        setReadList(readBookList)
    }, [])

    return (
        <div>
            <h2>Listed books: </h2>
            <Tabs>
                <TabList>
                    <Tab>Read list</Tab>
                    <Tab>Wish list</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I Read: {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;