import NewTodoForm from '../components/NewTodoForm';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      Dashboard Layout
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
