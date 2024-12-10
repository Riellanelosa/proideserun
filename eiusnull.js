try {
    // Code that might throw an exception
    throw new Error('Something went wrong');
} catch (error) {
    console.error('Caught an error:', error.message);
} finally {
    console.log('Finally block executed regardless of exceptions');
}
