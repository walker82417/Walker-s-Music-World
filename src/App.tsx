/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Library } from './pages/Library';
import { Community } from './pages/Community';
import { Live } from './pages/Live';
import { PlayerProvider } from './contexts/PlayerContext';

export default function App() {
  return (
    <PlayerProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/community" element={<Community />} />
            <Route path="/live" element={<Live />} />
          </Routes>
        </Layout>
      </Router>
    </PlayerProvider>
  );
}
