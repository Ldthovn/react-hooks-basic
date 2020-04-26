import React, { useState, useEffect } from "react";
import queryString from "query-string";
import "./HomePage.scss";
// import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList/index";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFiltersForm from "./components/PostFiltersForm";
import CLock from "./components/Clock";
import BetterCLock from "./components/BetterClock";
import MagicBox from "./components/MagicBox";

function HomePage() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend!" },
    { id: 2, title: "We love Easy Frontend!" },
    { id: 3, title: "They love Easy Frontend!" },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  const [showClock, setShowClock] = useState(true);

  useEffect(() => {
    async function fetchPostList() {
      try {
        // _limit=10&_page=1
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        // console.log({ responseJSON });

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch post list: ", error.message);
      }
    }
    // console.log("UseEffect 1");

    fetchPostList();
  }, [filters]);

  useEffect(() => {
    // console.log("UseEffect 2");
  });

  function handlePageChange(newPage) {
    console.log("New page: ", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log("formValue :", formValues);
    // add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handleFiltersChange(newFilters) {
    console.log("New filters: ", newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }
  return (
    <div className="App">
      <p>React hooks - PostList</p>

      <MagicBox />

      {/* <BetterCLock />

      {showClock && <CLock />}
      <button onClick={() => setShowClock(false)}>Hide clock</button> */}

      {/* <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <PostFiltersForm onSubmit={handleFiltersChange} /> */}

      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}

      {/* <ColorBox /> */}
    </div>
  );
}

export default HomePage;
