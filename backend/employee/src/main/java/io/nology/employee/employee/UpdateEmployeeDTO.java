package io.nology.employee.employee;

import java.time.LocalDate;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class UpdateEmployeeDTO {

  @NotBlank
  private String firstName;

  private String middleName;

  @NotBlank
  private String lastName;

  @NotBlank
  private String emailAddress;

  @Min(9)
  private Long mobNumber;

  @NotBlank
  private String resAddress;

  @NotBlank
  private String empStatus;

  @NotNull
  private LocalDate startDate;

  private LocalDate endDate;

  private Boolean onGoing;

  @NotBlank
  private String workBasis;

  @Min(1)
  private Integer hrsPerWeek;

  // public EmployeeDTO(String firstName, String middleName, String lastName,
  // String emailAddress, Long mobNumber, String resAddress, String empStatus,
  // LocalDate startDate,
  // LocalDate endDate, Boolean onGoing, String workBasis, Integer hrsPerWeek) {

  // this.firstName = firstName;
  // this.middleName = middleName;
  // this.lastName = lastName;
  // this.emailAddress = emailAddress;
  // this.mobNumber = mobNumber;
  // this.resAddress = resAddress;
  // this.empStatus = empStatus;
  // this.startDate = startDate;
  // this.endDate = endDate;
  // this.onGoing = onGoing;
  // this.workBasis = workBasis;
  // this.hrsPerWeek = hrsPerWeek;
  // }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getMiddleName() {
    return middleName;
  }

  public void setMiddleName(String middleName) {
    this.middleName = middleName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmailAddress() {
    return emailAddress;
  }

  public void setEmailAddress(String emailAddress) {
    this.emailAddress = emailAddress;
  }

  public Long getMobNumber() {
    return mobNumber;
  }

  public void setMobNumber(Long mobNumber) {
    this.mobNumber = mobNumber;
  }

  public String getResAddress() {
    return resAddress;
  }

  public void setResAddress(String resAddress) {
    this.resAddress = resAddress;
  }

  public String getEmpStatus() {
    return empStatus;
  }

  public void setEmpStatus(String empStatus) {
    this.empStatus = empStatus;
  }

  public LocalDate getStartDate() {
    return startDate;
  }

  public void setStartDate(LocalDate startDate) {
    this.startDate = startDate;
  }

  public LocalDate getEndDate() {
    return endDate;
  }

  public void setEndDate(LocalDate endDate) {
    this.endDate = endDate;
  }

  public Boolean getOnGoing() {
    return onGoing;
  }

  public void setOnGoing(Boolean onGoing) {
    this.onGoing = onGoing;
  }

  public String getWorkBasis() {
    return workBasis;
  }

  public void setWorkBasis(String workBasis) {
    this.workBasis = workBasis;
  }

  public Integer getHrsPerWeek() {
    return hrsPerWeek;
  }

  public void setHrsPerWeek(Integer hrsPerWeek) {
    this.hrsPerWeek = hrsPerWeek;
  }

}
