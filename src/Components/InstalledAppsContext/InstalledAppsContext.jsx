import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const InstalledAppsContext = createContext();

// Custom hook to use the context
export const useInstalledApps = () => {
    const context = useContext(InstalledAppsContext);
    if (!context) {
        throw new Error('useInstalledApps must be used within InstalledAppsProvider');
    }
    return context;
};

// Provider Component
export const InstalledAppsProvider = ({ children }) => {
    const [installedApps, setInstalledApps] = useState(() => {
        // Initialize from localStorage
        const stored = localStorage.getItem('installedApps');
        return stored ? JSON.parse(stored) : [];
    });

    // Save to localStorage whenever installedApps changes
    useEffect(() => {
        localStorage.setItem('installedApps', JSON.stringify(installedApps));
    }, [installedApps]);

    // Install an app
    const installApp = (app) => {
        if (!installedApps.find(installed => installed.id === app.id)) {
            setInstalledApps([...installedApps, app]);
        }
    };

    // Uninstall an app
    const uninstallApp = (appId) => {
        setInstalledApps(installedApps.filter(app => app.id !== appId));
    };

    // Check if app is installed
    const isInstalled = (appId) => {
        return installedApps.some(app => app.id === appId);
    };

    return (
        <InstalledAppsContext.Provider value={{ 
            installedApps, 
            installApp, 
            uninstallApp, 
            isInstalled 
        }}>
            {children}
        </InstalledAppsContext.Provider>
    );
};