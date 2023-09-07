# Import necessary modules from Django
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

# Custom manager for CustomUser model
class CustomUserManager(BaseUserManager):
    # Function to create a new user
    def create_user(self, username, password=None, **extra_fields):
        # Check if username is provided
        if not username:
            raise ValueError('The Username field must be set')
        
        # Create and return user
        user = self.model(username=username, **extra_fields)
        user.set_password(password)  # Use set_password to hash the password
        user.save(using=self._db)    # Save user object to database
        return user

    # Function to create a superuser
    def create_superuser(self, username, password=None, **extra_fields):
        # Create a new user with provided username and password
        user = self.create_user(username, password, **extra_fields)

        # Make the user a superuser & staff
        user.is_staff = True
        user.is_superuser = True
        
        # Save the superuser object to database
        user.save(using=self._db)
        return user

# CustomUser model definition
class CustomUser(AbstractBaseUser, PermissionsMixin):
    # Fields
    username = models.CharField(max_length=50, unique=True)  # Unique username
    is_active = models.BooleanField(default=True)            # Is the user active?
    is_staff = models.BooleanField(default=False)            # Is the user a staff member?

    # Custom manager
    objects = CustomUserManager()
    
    # Additional fields
    email = models.EmailField(unique=True, null=True, blank=True)  # Unique email, can be blank or null
    
    # Username will be used for authentication instead of email
    USERNAME_FIELD = 'username'
    
    # REQUIRED_FIELDS contains all required fields on your user model
    # other than USERNAME_FIELD
    REQUIRED_FIELDS = []

    # String representation of the model
    def __str__(self):
        return self.username
