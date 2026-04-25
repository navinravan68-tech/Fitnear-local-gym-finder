# FitNear Security Specification

## Data Invariants
1. A user can only edit their own profile.
2. Only Gym Owners can create/edit gyms they own.
3. Bookings must reference a valid user and gym.
4. Ratings must be between 1 and 5.
5. Administrative fields (isApproved) can only be modified by Admins.

## The Dirty Dozen Payloads (Rejection Expected)
1. Creating a gym with `isApproved: true` as a non-admin.
2. Updating a gym's `ownerId` to hijack it.
3. Booking a trial for another user.
4. Submitting a review with a 10/5 rating.
5. Deleting another user's review.
6. Updating a user's `uid` field.
7. Creating a gym listing without an `ownerId`.
8. Updating `startingPrice` to a negative value.
9. Injecting 2MB of junk text into gym `description`.
10. Reading another user's private `phoneNumber` from a separate collection (if implemented).
11. Admin spoofing by setting `isAdmin: true` in user profile.
12. Listing all gym bookings without being the owner or admin.

## Test Runner Plan
Implementing unit tests for rules using `@firebase/rules-unit-testing`.
