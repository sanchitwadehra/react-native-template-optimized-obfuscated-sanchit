// templateProject/template.config.js
module.exports = {
    // This is the name the CLI will look for in your template files
    // (both in content and potentially in paths) to replace with the new project name.
    placeholderName: 'templateProject', 
  
    // According to the docs you found, this is for the display name.
    // Your App's display name (e.g., in app.json or strings.xml) should use 'templateProject'
    // if you want the CLI to replace it based on placeholderName,
    // or it should use a different placeholder if you want to use titlePlaceholder.
    // Let's stick to placeholderName for simplicity for now.
    // titlePlaceholder: 'Template Project Display Name', // We can add this if needed
  
    // Title of your template (for documentation/display)
    title: 'Sanchit Wadehra Ultimate React Native Starter',

    templateDir: './templateProject/template',
  
    // Let's keep this dirsToRename. The local test will tell us if it works as expected
    // or if the CLI handles these path changes differently/implicitly.
    dirsToRename: {
      'android/app/src/main/java/com/sanchitwadehra/templateproject': `android/app/src/main/java/com/sanchitwadehra/{{newProjectNameLowercase}}`, // Using template literal for clarity
      'ios/templateProject': `ios/{{newProjectName}}`,
      // We might also need to specify renaming the .xcodeproj folder if it's not implicit
      'ios/templateProject.xcodeproj': `ios/{{newProjectName}}.xcodeproj` 
    },
    
    // If the CLI doesn't rename files like MainActivity.kt based on the project name,
    // you might need a postInitScript to handle such specific renames or a more detailed
    // filesToRename structure if supported.
  };