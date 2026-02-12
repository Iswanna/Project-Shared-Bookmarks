import { sortBookmarksByTimestamp } from './utils.js';

test('should sort bookmarks from newest to oldest by timestamp', () => {
    // Arrange: Create unsorted bookmarks with different creation times
    const unsortedBookmarks = [
        { title: "First Bookmark", createdAt: 1000000000000 },      // Oldest: Sept 2001
        { title: "Latest Bookmark", createdAt: 1739372400000 },     // Newest: Feb 2026
        { title: "Middle Bookmark", createdAt: 1500000000000 }      // Middle: July 2017
    ];

    // Act: Sort the bookmarks using the function
    const sortedResult = sortBookmarksByTimestamp(unsortedBookmarks);

    // Assert: Verify bookmarks are sorted newest first
    expect(sortedResult[0].title).toBe("Latest Bookmark");  // First should be newest
    expect(sortedResult[1].title).toBe("Middle Bookmark");  // Second should be middle
    expect(sortedResult[2].title).toBe("First Bookmark");   // Last should be oldest
});