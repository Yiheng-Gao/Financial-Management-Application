import React from 'react';
import './MainPage.css';
import SidebarMenu from './SidebarMenu';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <header className="main-header">
          <h1>Financial Management</h1>
        </header>
        <aside className="sidebar">
          <SidebarMenu /> {/* Embed the SidebarMenu component here */}
        </aside>
        <section className="content">
          <p>Welcome to the main page!</p>
        </section>
      </div>
    );
  }
}

export default MainPage;
