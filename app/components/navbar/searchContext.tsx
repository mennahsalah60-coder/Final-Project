// 'use client'
// import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
// // import { data } from 'react-router';

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     sale: number;
//     image: string;
// }

// interface SearchContextType {
//     search: string;
//     setSearch: (value: string) => void;
//     result: Product[];
//     loading: boolean;
// }

// const SearchContext = createContext<SearchContextType>({
//     search: '',
//     setSearch: () => { },
//     result: [],
//     loading: false,
// });

// export const SearchProvider = ({ children }: { children: ReactNode }) => {
//     const [search, setSearch] = useState('');
//     const [result, setResult] = useState<Product[]>([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         if (!search) {
//             setResult([]);
//             return;
//         }

//         setLoading(true);

//         fetch(`/api/products?query=${search}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 const combined: Product[] = [...data.fruits, ...data.vegetables];
//                 console.log(data)

//                 const filtered = combined.filter((item) =>
//                     item.name.toLowerCase().includes(search.toLowerCase())
//                 );

//                 setResult(filtered);
//                 setLoading(false);
//             })
//             .catch(() => {
//                 setResult([]);
//                 setLoading(false);
//             });
//     }, [search]);

//     return (
//         <SearchContext.Provider value={{ search, setSearch, result, loading }}>
//             {children}
//         </SearchContext.Provider>
//     );
// };

// export const useSearch = () => useContext(SearchContext);