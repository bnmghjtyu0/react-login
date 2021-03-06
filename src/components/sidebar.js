import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">
                <span class="menu-title">Dashboard</span>
                <i class="mdi mdi-home menu-icon" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <span class="menu-title">UI Elements</span>
                <i class="menu-arrow" />
                <i class="mdi mdi-crosshairs-gps menu-icon" />
              </a>
              <div class="collapse" id="ui-basic">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    {' '}
                    <a class="nav-link" href="pages/ui-features/buttons.html">
                      Buttons
                    </a>
                  </li>
                  <li class="nav-item">
                    {' '}
                    <a class="nav-link" href="pages/ui-features/typography.html">
                      Typography
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/icons/mdi.html">
                <span class="menu-title">Icons</span>
                <i class="mdi mdi-contacts menu-icon" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/forms/basic_elements.html">
                <span class="menu-title">Forms</span>
                <i class="mdi mdi-format-list-bulleted menu-icon" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/charts/chartjs.html">
                <span class="menu-title">Charts</span>
                <i class="mdi mdi-chart-bar menu-icon" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/tables/basic-table.html">
                <span class="menu-title">Tables</span>
                <i class="mdi mdi-table-large menu-icon" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                <span class="menu-title">Sample Pages</span>
                <i class="menu-arrow" />
                <i class="mdi mdi-medical-bag menu-icon" />
              </a>
              <div class="collapse" id="general-pages">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    {' '}
                    <a class="nav-link" href="pages/samples/blank-page.html">
                      {' '}
                      Blank Page{' '}
                    </a>
                  </li>
                  <li class="nav-item">
                    {' '}
                    <a class="nav-link" href="pages/samples/login.html">
                      {' '}
                      Login{' '}
                    </a>
                  </li>
                  <li class="nav-item">
                    {' '}
                    <a class="nav-link" href="pages/samples/register.html">
                      {' '}
                      Register{' '}
                    </a>
                  </li>
                  <li class="nav-item">
                    {' '}
                    <a class="nav-link" href="pages/samples/error-404.html">
                      {' '}
                      404{' '}
                    </a>
                  </li>
                  <li class="nav-item">
                    {' '}
                    <a class="nav-link" href="pages/samples/error-500.html">
                      {' '}
                      500{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar
