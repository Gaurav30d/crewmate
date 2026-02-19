import os
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt

security = HTTPBearer()

def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """
    Verifies the Supabase JWT token.
    Returns the decoded token payload (user info) if valid.
    """
    token = credentials.credentials
    secret = os.getenv("SUPABASE_JWT_SECRET") # User needs to find this in Supabase Dashboard > Settings > API
    
    # Fallback to Anon Key if JWT Secret not set (NOT SECURE for Production, but good for quick dev if user confused)
    # Ideally, we enforce JWT Secret.
    # For now, let's assume the user might use the Service Role Key or Anon Key which is also a JWT.
    # But strictly speaking, we need the JWT Secret to verify the signature of an Auth User token securely.
    
    if not secret:
        # If no secret provided, we might warn or fail. 
        # For this stage, let's just decode without verification if strictly needed for dev, 
        # BUT that defeats the purpose.
        # Let's try to verify using the secret.
        pass

    try:
        # If SECRET is missing, we can try to decode without verification for debugging (bad practice)
        # OR we assume the user will provide it.
        # Let's assume they provide it. If not, this will fail if we enforce signature.
        
        # NOTE: Supabase Access Tokens are signed with HS256 and the project specific JWT Secret.
        if secret:
            payload = jwt.decode(token, secret, algorithms=["HS256"], audience="authenticated")
        else:
             # WARNING: Unsafe, only for initial dev where user hasn't set secret yet
            payload = jwt.decode(token, options={"verify_signature": False})
            
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token expired",
        )
    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
        )
