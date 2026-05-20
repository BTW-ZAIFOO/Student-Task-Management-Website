'use client';

import { useState, useEffect, useCallback } from 'react';
import { IoNotifications, IoClose, IoCheckmark, IoAlert } from 'react-icons/io5';

export interface Notification {
  id: string;
  type: 'task' | 'exam' | 'deadline' | 'success';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

interface NotificationCenterProps {
  notifications: Notification[];
  onClear?: (id: string) => void;
  onClearAll?: () => void;
}

export function NotificationCenter({
  notifications,
  onClear,
  onClearAll,
}: NotificationCenterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNew, setHasNew] = useState(false);

  useEffect(() => {
    setHasNew(notifications.some((n) => !n.read));
  }, [notifications]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'task':
        return <IoAlert className="w-4 h-4 text-blue-600" />;
      case 'exam':
        return <IoAlert className="w-4 h-4 text-red-600" />;
      case 'deadline':
        return <IoAlert className="w-4 h-4 text-orange-600" />;
      case 'success':
        return <IoCheckmark className="w-4 h-4 text-green-600" />;
      default:
        return <IoNotifications className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
      >
        <IoNotifications className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 z-50 max-h-96 overflow-y-auto">
          <div className="sticky top-0 p-4 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex justify-between items-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
            {notifications.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear All
              </button>
            )}
          </div>

          {notifications.length === 0 ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              <IoNotifications className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No notifications</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-slate-700">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors ${
                    !notification.read ? 'bg-blue-50 dark:bg-slate-700/50' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      {getIcon(notification.type)}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-gray-900 dark:text-white">
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => onClear?.(notification.id)}
                      className="p-1 text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                      <IoClose className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
