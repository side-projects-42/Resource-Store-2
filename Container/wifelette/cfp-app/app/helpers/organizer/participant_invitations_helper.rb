module Organizer::ParticipantInvitationsHelper
  def new_participant_invitation_button
    link_to 'Invite New User', '#', class: 'btn btn-primary',
      data: { toggle: 'modal', target: "#new-participant-invitation" },
      id: 'invite-new-participant'
  end
end
